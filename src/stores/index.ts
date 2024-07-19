import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const vestiPersons = ref<any>([]);
  const personInfo = ref<any>({});

  const getVestiPersons = async () => {
    const response = await fetch('https://cdnapi.smotrim.ru/api/v1/boxes/vesti2');
    const data = await response.json();
    vestiPersons.value = data.data.content[11].content;
  };

  const getPersonInfo = async (pesonId) => {
    const response = await fetch(`https://cdnapi.smotrim.ru/api/v1/persons/${pesonId}`);
    const data = await response.json();
    personInfo.value = data;
  };

  return {
    vestiPersons,
    personInfo,
    getVestiPersons,
    getPersonInfo,
  };
});

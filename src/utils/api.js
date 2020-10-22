import convertGnomes from './convertGnomes';


export default {
  getGnomes: async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    );

    if (!response.ok) {
      throw new Error('Something with network');
    }

    const json = await response.json();

    return convertGnomes(json);
  }
}

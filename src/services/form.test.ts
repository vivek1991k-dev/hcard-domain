import { initialDataWithoutStorage } from "../test/form";
import { storedData } from "../test/localStorage";
import { generateInitialData } from "./form";

describe('unit tests for form services', () => {
  it('should generate initial data from form metadata', () => {
    const initialData = generateInitialData();
    expect(initialData).toEqual(initialDataWithoutStorage);
  });

  it('should generate initial data from localstorage if available', () => {
    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = () => storedData; 
    const initialData = generateInitialData();
    expect(initialData).toEqual(JSON.parse(storedData));
  });
});
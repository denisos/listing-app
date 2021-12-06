import { getLocalStorage, setLocalStorage, getStateAbbrev, setFaveInLocalStorage } from '../utils/utils';


test('should return state abbrev', () => {
  expect(getStateAbbrev('Texas')).toEqual('TX');
});

// important: localStorage needs to be mocked; I was unable to get that working so that needs to be done
// tried but did not get working https://bholmes.dev/blog/mocking-browser-apis-fetch-localstorage-dates-the-easy-way-with-jest/
//
test('should setFaveInLocalStorage successfully', () => {
  // set start case
  setLocalStorage('faves', null);

  // set
  setFaveInLocalStorage(1234);
  expect(getLocalStorage('faves')).toStrictEqual({ "1234": true });

  // unset when exists
  setFaveInLocalStorage(1234);
  expect(getLocalStorage('faves')).toStrictEqual({ "1234": false });

  // reset
  setLocalStorage('faves', null);
});

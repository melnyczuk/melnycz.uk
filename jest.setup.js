import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockFetchPromise = Promise.resolve({ text: () => 'test success' });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

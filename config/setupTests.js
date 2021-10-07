import { configure } from 'enzyme/build';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

configure({ adapter: new Adapter() });
registerRequireContextHook();

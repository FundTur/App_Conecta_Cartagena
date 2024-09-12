import { mmkvStorage } from './mmkvStore';

const persistConfig = {
    key: 'root',
    storage: mmkvStorage,
    whitelist: ['uiPersistent'],
};

export default persistConfig;

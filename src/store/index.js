import { createStore, createLogger } from 'vuex'
import modules from './modules'

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

// Automatically run the `init` action for every module,
// if one exists.
for (const moduleName of Object.keys(modules)) {
    if (modules[moduleName].actions && modules[moduleName].actions.init) {
        store.dispatch(`${moduleName}/init`)
    }
}

export default store

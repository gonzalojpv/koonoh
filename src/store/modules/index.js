// Register each file as a corresponding Vuex module. Module nesting
// will mirror [sub-]directory hierarchy and modules are namespaced
// as the camelCase equivalent of their file name.

import camelCase from 'lodash/camelCase'

// Allow us to dynamically require all Vuex module files.
const requireModules = import.meta.globEager('./*.js')

const modulesCache = {}
const storeData = { modules: {} }

// Recursively get the namespace of a Vuex module, even if nested.
function getNamespace(subtree, path) {
    if (path.length === 1) return subtree

    const namespace = path.shift()
    subtree.modules[namespace] = {
        modules: {},
        namespaced: true,
        ...subtree.modules[namespace],
    }
    return getNamespace(subtree.modules[namespace], path)
}
// eslint-disable-next-line no-extra-semi
;(function updateModules() {
    for (const path in requireModules) {
        // Skip the module during hot reload if it refers to the
        // same module definition as the one we have cached.
        if (modulesCache[path] === requireModules[path]) return

        // Update the module cache, for efficient hot reloading.
        modulesCache[path] = requireModules[path]
        // Get the module path as an array.
        const modulePath = path
            // Remove the "./" from the beginning.
            .replace(/^\.\//, '')
            // Remove the file extension from the end.
            .replace(/\.\w+$/, '')
            // Split nested modules into an array path.
            .split(/\//)
            // camelCase all module namespaces and names.
            .map(camelCase)
        // Get the modules object for the current path.
        const { modules } = getNamespace(storeData, modulePath)
        // Add the module to our modules object.
        modules[modulePath.pop()] = {
            // Modules are namespaced by default.
            namespaced: true,
            ...requireModules[path],
        }
    }
})()

export default storeData.modules

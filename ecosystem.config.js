// Copyright (c) 2022 Kin Wa Lam
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
    apps: [
        {
            name: 'LandingPage',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}

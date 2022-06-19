/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import * as browserify from "@cypress/browserify-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";

export default async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

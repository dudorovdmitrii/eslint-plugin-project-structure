import * as fs from "fs";
import yaml from "js-yaml";

export const readConfigFile = (configPath: string) => {
  let config = null;

  try {
    config = yaml.load(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    return;
  }

  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  } catch (error) {
    return;
  }

  return config;
};

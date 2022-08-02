// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {enableSkia} from '@remotion/skia/enable';
import {Config} from 'remotion';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);

Config.Bundling.overrideWebpackConfig((config) => {
	return enableSkia(config);
});

Config.Rendering.setConcurrency(2);
Config.Puppeteer.setChromiumOpenGlRenderer('angle');

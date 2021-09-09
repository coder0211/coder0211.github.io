// Change to true for production
import 'package:logger/logger.dart';

const bool DEV = false;
const Level LOGGER_LEVEL = DEV ? Level.debug : Level.nothing;
const String envFile = DEV ? 'lib/env/.dev_env' : 'lib/env/.env';
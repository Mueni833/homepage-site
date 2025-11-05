// Configuration loader
function loadConfig(config) {
    // This line may cause a null pointer issue if config is null
    return config.settings.theme;
}

// Export placeholder config
const config = null;

loadConfig(config);

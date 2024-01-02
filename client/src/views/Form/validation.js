const validation = (input) => {
    const nameRegex = /^[a-zA-Z]+$/;
    const numRegex = /^[0-9]+$/;
    const urlRegex = /^(http|https):\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
    let errors = {};

    if (!input.name) {
        errors.name = "Must be a name";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "The name can't contain numbers or special characters";
    } else if (input.name.length > 12) {
        errors.name = "The maximum length is 12 characters";
    }

    if (input.weight_min < 0) {
        errors.weight_min = "Weight min cannot be less than 0";
    } else if (input.weight_min > input.weight_max) {
        errors.weight_min = "Weight min cannot be greater than max";
    }

    if (input.weight_max < 0) {
        errors.weight_max = "Weight max cannot be less than 0";
    } else if (input.weight_max > 62) {
        errors.weight_max = "Weight max cannot be greater than 62";
    }

    if (input.height_min < 0) {
        errors.height_min = "Height min cannot be less than 0";
    } else if (input.height_min > input.height_max) {
        errors.height_min = "Height min cannot be greater than max";
    }

    if (input.height_max < 0) {
        errors.height_max = "Height max cannot be less than 0";
    } else if (input.height_max > 100) {
        errors.height_max = "Height max cannot be greater than 100";
    }

    if (!input.life_span || input.life_span <= 0 || !numRegex.test(input.life_span)) {
        errors.life_span = "The life span must be greater";
    }

    if (input.image && !urlRegex.test(input.image)) {
        errors.image = "The image must be a valid URL";
    }

    return errors;
};

export default validation;
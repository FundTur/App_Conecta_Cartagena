import CheckBox from "@react-native-community/checkbox"
import React from "react";

const FormCheckBox = () => {
    const [value, setValue] = React.useState(true);

    return <CheckBox value={value} onValueChange={setValue} />
}

export default FormCheckBox
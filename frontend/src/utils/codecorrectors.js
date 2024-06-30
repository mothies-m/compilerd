import { URL } from "../constants/URL";

// Function to transform the script by ensuring each line ends with a newline character
const transformScript = (script) => {
  return script.split("\n").map((line, index, arr) => (
    index < arr.length - 1 ? `${line}\n` : line
  )).join("");
};

const transformInput = (input) => {
  return input.split(",").join(" ");
};

export const compileCode = async (language, code, input = undefined) => {
  const script = transformScript(code);
  const stdin = input ? transformInput(input) : undefined;

  let bodyData = { language, script };

  if (stdin) {
    bodyData.stdin = stdin;
  }

  if (["promptv1", "promptv2"].includes(language)) {
    bodyData = {
      language,
      question: script,
      userAnswer: stdin,
    };
  }

  try {
    const response = await fetch(`${URL}/execute/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();
    return result.output || result.compile_message || result.message;
  } catch (error) {
    console.error("Compilation error:", error);
    throw new Error("Failed to compile code");
  }
};


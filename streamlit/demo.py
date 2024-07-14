import streamlit as st
import requests
from typing import Optional
import json

st.set_page_config(page_title="🧠 Neuro Flow")
st.title('🧠 Neuro Flow')

# openai_api_key = st.sidebar.text_input('OpenAI API Key')

BASE_API_URL = "http://127.0.0.1:7860/api/v1/run"
FLOW_ID = "6c61fc9a-9089-48dd-b0e8-4c594876c845"
ENDPOINT = "neuroflow" # The endpoint name of the flow

# You can tweak the flow by adding a tweaks dictionary
# e.g {"OpenAI-XXXXX": {"model_name": "gpt-4"}}
TWEAKS = {
    "ChatInput-fqoXW": {},
    "Prompt-hjRci": {},
    "OpenAIModel-Bgn8W": {},
    "ChatOutput-f7sQY": {},
    "File-Wf9cJ": {},
    "AstraDB-W6c5q": {},
    "SplitText-1EJY8": {},
    "OpenAIEmbeddings-Y9EfQ": {},
    "ParseData-LBgHC": {},
    "Memory-e15C8": {}
}

def run_flow(
    message: str,
    endpoint: str,
    output_type: str = "chat",
    input_type: str = "chat",
    tweaks: Optional[dict] = None,
    api_key: Optional[str] = None) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param endpoint: The ID or the endpoint name of the flow
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/{endpoint}"

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    headers = None
    if tweaks:
        payload["tweaks"] = tweaks
    if api_key:
        headers = {"x-api-key": api_key}

    response = requests.post(api_url, json=payload, headers=headers)

    return response.json()

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# React to user input
if prompt := st.chat_input("What is up?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant"):
        response = run_flow(
            message=prompt,
            endpoint=ENDPOINT,
            output_type="chat",
            input_type="chat"
        )

        responseText = response["outputs"][0]["outputs"][0]["results"]["message"]["data"]["text"]
        response = f"{responseText}"
        response = st.write(response)
    st.session_state.messages.append({"role": "assistant", "content": response})
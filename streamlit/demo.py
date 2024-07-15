import streamlit as st
import requests
from typing import Optional
import json
import warnings
import webbrowser
try:
    from utils import upload_file
except ImportError:
    warnings.warn("Langflow provides a function to help you upload files to the flow. Please install langflow to use it.")
    upload_file = None

st.set_page_config(page_title="🧠 Neuro Flow")
st.title('🧠 Neuro Flow')

def redirect_landingpage():
    landingpage_url = "https://honorable-blood.surge.sh"
    webbrowser.open(landingpage_url)

with st.sidebar:
    st.button("back to landing page", on_click=redirect_landingpage())

BASE_API_RUN_URL = "https://7fcb-111-108-27-62.ngrok-free.app/api/v1/run"
BASE_API_URL = "https://7fcb-111-108-27-62.ngrok-free.app"
# FLOW_ID = "6c61fc9a-9089-48dd-b0e8-4c594876c845"
FLOW_ID_IMAGE_CLASSIFICATION = "765df6e4-ed65-404f-9605-f55a3385f60c"
ENDPOINT = "neuroflow"
ENDPOINT_IMAGE_CLASSIFICATION = "neuroflow-image-classification"

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

TWEAKS_IMAGE_CLASSIFICATION = {
  "ChatInput-Ypoec": {},
  "HuggingFaceModel-Tnjgi": {},
  "ChatOutput-qaGTG": {}
}

def run_chat_langflow(
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
    api_url = f"{BASE_API_RUN_URL}/{endpoint}"

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
        response = run_chat_langflow(
            message=prompt,
            endpoint=ENDPOINT,
            output_type="chat",
            input_type="chat"
        )

        responseText = response["outputs"][0]["outputs"][0]["results"]["message"]["data"]["text"]
        response = f"{responseText}"
        response = st.write(response)
    st.session_state.messages.append({"role": "assistant", "content": response})

# Image classification
def run_image_classification_flow(
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
    api_url = f"{BASE_API_RUN_URL}/{endpoint}"

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

# uploaded_file = st.file_uploader("For brain tumor image classification, please upload the MRI image through here.", type=["jpg", "png", "jpeg"])
# if uploaded_file is not None:
#     # To read file as bytes:
#     bytes_data = uploaded_file.getvalue()
#     file_upload_response = upload_file(bytes_data=bytes_data, host=BASE_API_URL, flow_id=FLOW_ID_IMAGE_CLASSIFICATION)
#     print(file_upload_response)
#     tweaks = TWEAKS_IMAGE_CLASSIFICATION
#     tweaks["ChatInput-Ypoec"] = { "files": "765df6e4-ed65-404f-9605-f55a3385f60c/brain-tumor.jpg" }
#     print(tweaks)

#     response = run_image_classification_flow(
#         message="no text needed",  # message is not required for image classification
#         endpoint=ENDPOINT_IMAGE_CLASSIFICATION,
#         tweaks=tweaks,
#     )
#     print(response)

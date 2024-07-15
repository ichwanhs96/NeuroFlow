import httpx
import io


def upload(file_path, host, flow_id):
    """
    Upload a file to Langflow and return the file path.

    Args:
        file_path (str): The path to the file to be uploaded.
        host (str): The host URL of Langflow.
        flow_id (UUID): The ID of the flow to which the file belongs.

    Returns:
        dict: A dictionary containing the file path.

    Raises:
        Exception: If an error occurs during the upload process.
    """
    try:
        url = f"{host}/api/v1/upload/{flow_id}"
        response = httpx.post(url, files={"file": open(file_path, "rb")})
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error uploading file: {response.status_code}")
    except Exception as e:
        raise Exception(f"Error uploading file: {e}")
    
def upload_bytes(bytes_data, host, flow_id):
    """
    Upload a file to Langflow and return the file path.

    Args:
        bytes_data (str): The path to the file to be uploaded.
        host (str): The host URL of Langflow.
        flow_id (UUID): The ID of the flow to which the file belongs.

    Returns:
        dict: A dictionary containing the file path.

    Raises:
        Exception: If an error occurs during the upload process.
    """
    try:
        url = f"{host}/api/v1/files/upload/{flow_id}"
        file_object = io.BytesIO(bytes_data)
        response = httpx.post(url, files={"file": file_object})
        if response.status_code == 201:
            return response.json()
        else:
            print(url)
            raise Exception(f"Error uploading file: {response.status_code}")
    except Exception as e:
        raise Exception(f"Error uploading file: {e}")


def upload_file(bytes_data, host, flow_id):
    """
    Upload a file to Langflow and return the file path.

    Args:
        bytes_data (bytes): The path to the file to be uploaded.
        host (str): The host URL of Langflow.
        port (int): The port number of Langflow.
        flow_id (UUID): The ID of the flow to which the file belongs.
        tweaks (dict): A dictionary of tweaks to be applied to the file.

    Returns:
        dict: A dictionary containing the file path and any tweaks that were applied.

    Raises:
        Exception: If an error occurs during the upload process.
    """
    try:
        response = upload_bytes(bytes_data, host, flow_id)
        if response["file_path"]:
            return response
        else:
            raise ValueError("Error uploading file")
    except Exception as e:
        raise ValueError(f"Error uploading file: {e}")

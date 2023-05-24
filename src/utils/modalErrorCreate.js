const showAlertError = (message) => {
    const alertDiv = document.createElement("div");
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.width = "400px";
    alertDiv.style.height = "300px";
    alertDiv.style.backgroundColor = "blue";
    alertDiv.style.borderRadius = "10px";
    alertDiv.style.display = "flex";
    alertDiv.style.flexDirection = "column";
    alertDiv.style.justifyContent = "center";
    alertDiv.style.alignItems = "center";
    alertDiv.style.color = "white";
    alertDiv.style.textAlign = "center";
    alertDiv.style.transition = "3s";
  
  
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    alertDiv.appendChild(messageElement);
  
    const closeButton = document.createElement("button");
    closeButton.innerText = "OK";
    closeButton.style.backgroundColor = "white";
    closeButton.style.color = "blue";
    closeButton.style.border = "none";
    closeButton.style.padding = "10px 20px";
    closeButton.style.marginTop = "20px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(alertDiv);
    });
    alertDiv.appendChild(closeButton);
  
    document.body.appendChild(alertDiv);
  };
  
  export default showAlertError;
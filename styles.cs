body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f8f9fa;
}

.container {
    margin-top: 50px;
}

.product {
    display: inline-block;
    background: white;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.product img {
    width: 150px;
    height: 150px;
}

.buy-btn {
    display: block;
    background: #28a745;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}

.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: left;
}

.popup-content select, input, textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 5px;
}

.loading {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 20px;
    border-radius: 10px;
}

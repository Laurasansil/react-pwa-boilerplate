if (Notification.permission === "granted") {
  alert("Temos permissão!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
  });
}

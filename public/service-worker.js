self.skipWaiting();

self.addEventListener("fetch", function (_event) {});

if (Notification.permission === "granted") {
  alert("Temos permissão!");
  console.log(permission);
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
  });
}

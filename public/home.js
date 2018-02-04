function getSessionId(id) {
  if (id && id.length >= 6 && /^[a-z0-9]+$/.test(id)) {
    return (window.location.href = "/" + id);
  }
  return sweetAlert("Enter a session id:", {
    content: "input"
  }).then(function(id) {
    return getSessionId(id);
  });
}

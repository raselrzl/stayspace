const EmbeddedMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2076.010587739884!2d16.055785177235826!3d58.64580486554493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46593818a43dc8fb%3A0xbc65c89c247aa417!2sFinsp%C3%A5ngsv%C3%A4gen%20497%2C%20605%2080%20Sv%C3%A4rtinge%2C%20Sweden!5e0!3m2!1sen!2sbd!4v1743693962862!5m2!1sen!2sbd&zoom=12"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;

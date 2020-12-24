const GoogleMap = () => {
    return (
        <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12247.613604095855!2d32.744333390873436!3d39.87640163820423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34713810fcd55%3A0x3d420e0aefe1340f!2sBilkent%20CyberPark%20Tepe%20Binas%C4%B1!5e0!3m2!1sen!2str!4v1606921794371!5m2!1sen!2str"
          width="100%"
          height="450"
          frameBorder="0"
          style={{border:0}}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    )
}

export default GoogleMap;
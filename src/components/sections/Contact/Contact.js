import React from 'react';
import office from '../../../assets/img/building.png';
import mail from '../../../assets/img/mail.png';
import phone from '../../../assets/img/telephone.png';
import pin from '../../../assets/img/pins.png';
import fax from '../../../assets/img/faxs.png';
import Section from '../../../HOC/Section';
import './contact.css'; 

const Contact = () => {
    return (
        <Section id='contact' className="contact-container"> 
            <div className='section-headers'>
                <h3 className='contact-title'>Get in Touch</h3> 
                <p className='contact-sub'>Contact us for more info</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <img src={mail} alt="Email Icon" className="icon" />
                        <div>
                            <h4>Email</h4>
                            <p>suhadapetrol@cbn.net.id</p>
                            <p>info@suhadapetrol.co.id</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <img src={phone} alt="Phone Icon" className="icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+62 21 38793081</p>
                            <p>+62 21 38793082</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <img src={fax} alt="Fax Icon" className="icon" />
                        <div>
                            <h4>Fax</h4>
                            <p>+62 21 38793085</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <img src={pin} alt="pin Icon" className="icon" />
                        <div>
                            <h4>Head Office</h4>
                            <p>Jl. Balikpapan Raya No.26B-C RT.002 RW.06</p>
                            <p>Kelurahan Petojo Utara, Kecamatan Gambir</p>
                            <p>Jakarta Pusat 10130, Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="contact-image">
                    <img src={office} alt="Office" className="office-photo" />
                </div>
            </div>

            <div className="map-container">
    <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.702392767125!2d106.8069834824591!3d-6.170589244507152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f67be02e4463%3A0x4630225a465d833!2sJl.%20Balikpapan%20No.26%20B%2C%20RT.9%2FRW.6%2C%20Petojo%20Utara%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010130%2C%20Indonesia!5e0!3m2!1sen!2sau!4v1741797317424!5m2!1sen!2sau"
        width="600"
        height="600"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
</div>

        </Section>
    );
};

export default Contact;

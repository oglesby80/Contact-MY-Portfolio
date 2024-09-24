function Contact() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      color: '#333',
    },
    form: {
      width: '80%',
      maxWidth: '600px',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    label: {
      fontSize: '1.2rem',
      color: '#333',
      marginBottom: '0.5rem',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1rem',
      color: '#333',
    },
    submitButton: {
      backgroundColor: '#ff9800',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2rem',
      padding: '0.75rem 1.5rem',
      transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#e68900',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact</h2>
      <form style={styles.form}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input style={styles.input} type="text" id="name" placeholder="Your Name" />
        
        <label style={styles.label} htmlFor="email">Email</label>
        <input style={styles.input} type="email" id="email" placeholder="Your Email" />
        
        <label style={styles.label} htmlFor="message">Message</label>
        <textarea style={styles.input} id="message" rows="6" placeholder="Your Message"></textarea>
        
        <input style={styles.submitButton} type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;


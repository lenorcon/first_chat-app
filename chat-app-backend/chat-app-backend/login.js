// User login
app.post('/login', (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Retrieve the user from the database
      const getUserQuery = 'SELECT * FROM users WHERE username = ?';
      db.query(getUserQuery, [username], (err, results) => {
        if (err) {
          console.error('Error logging in user:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        if (results.length === 0) {
          res.status(401).json({ error: 'Invalid credentials' });
          return;
        }
  
        const user = results[0];
  
        // Compare the password
        bcrypt.compare(password, user.password, (compareErr, passwordMatch) => {
          if (compareErr) {
            console.error('Error comparing passwords:', compareErr);
            res.status(500).json({ error: 'Internal server error' });
            return;
          }
  
          if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
          }
  
          // Generate and send a JWT token
          const token = jwt.sign({ username: user.username }, 'your-secret-key');
          res.status(200).json({ token });
        });
      });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
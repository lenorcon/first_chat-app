// User registration
app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Save the user to the database
      const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error registering user:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // User login
  app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Retrieve the user from the database
      const sql = 'SELECT * FROM users WHERE username = ?';
      db.query(sql, [username], async (err, results) => {
        if (err) {
          console.error('Error logging in user:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        // Check if the user exists
        if (results.length === 0) {
          res.status(401).json({ error: 'Invalid credentials' });
          return;
        }
  
        const user = results[0];
  
        // Check the password
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          res.status(401).json({ error: 'Invalid credentials' });
          return;
        }
  
        // Generate a JWT token
        const token = jwt.sign({ username: user.username }, 'your-secret-key');
  
        res.status(200).json({ token });
      });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
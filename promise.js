function checkUser(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUsers = ['abdo', 'sara', 'mohamed'];

      if (existingUsers.includes(userName.toLowerCase())) {
        resolve(`User "${userName}" exists.`);
      } else {
        reject(`User "${userName}" does not exist.`);
      }
    }, 1000); // Simulate 1 second server delay
  });
}

// Example usage:
checkUser('Abdo')
  .then(response => console.log('✅', response))
  .catch(error => console.error('❌', error));

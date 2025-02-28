Below is the complete step-by-step guide in English to deploy the Revern application using Termux via the terminal:

---

## 1. Initial Setup in Termux

1. **Update and Upgrade Packages**  
   Open Termux and run the following command to ensure all packages are up to date:
   ```bash
   pkg update && pkg upgrade
   ```

2. **Install Git and Node.js**  
   Make sure Git and Node.js are installed:
   ```bash
   pkg install git nodejs
   ```

---

## 2. Clone Your Project Repository from GitHub

1. **Create a GitHub Repository**  
   If you haven't already, create a new repository (either public or private, according to your preference) and upload your project code there.

2. **Clone the Repository**  
   Obtain the repository URL (for example, `https://github.com/username/revern-airdrop.git`) and clone it by running:
   ```bash
   git clone https://github.com/username/revern-airdrop.git
   cd revern-airdrop
   ```

---

## 3. Install Project Dependencies

Ensure that the `package.json` file exists in your project folder. Then run:
```bash
npm install
```
This command installs all the packages listed (Next.js, Firebase, framer-motion, etc.).

---

## 4. Build the Next.js Application

Once all dependencies are installed, build the application with:
```bash
npm run build
```
The build process will generate a production-ready version of your app in a folder (usually the `.next` folder for Next.js).

---

## 5. Running the Application

There are two options to run the application:

### a. Running Next.js Directly
Start the Next.js server with:
```bash
npm run start
```
By default, the server will run on port 3000. Open your browser and navigate to:
```
http://localhost:3000
```

### b. Using `serve` for Static Hosting (Optional)
If you want to serve the static version of your app:
1. **Install `serve` Globally:**
   ```bash
   npm install -g serve
   ```
2. **Run `serve` on the Build Folder:**
   ```bash
   serve -s build -l 8080
   ```
   The application will run on port 8080, accessible at:
   ```
   http://localhost:8080
   ```

---

## 6. Accessing the Application

- If you use `npm run start`, open your browser and go to `http://localhost:3000`.
- If you use `serve`, open your browser and go to `http://localhost:8080`.

---

## 7. (Optional) Setting Up Port Forwarding for External Access

If you want to access the application from other devices on the same network:
- Ensure that the port you are using (3000 or 8080) is allowed through your device’s firewall.
- Find your Termux device’s local IP address (using commands like `ifconfig` or `ip a`).
- Access the application from another device by navigating to `http://<your_local_IP>:<port>`.

---

By following these steps, you will have successfully deployed the Revern application on Termux using the terminal. If you have any questions or run into issues, contract my social media x : @Hentaicuk
Instagram: @Squisymoe
telegram: @Rudipunyacerita

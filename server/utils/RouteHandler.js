const fs = require('fs').promises;
const path = require('path');
const registeredRoutes = new Map();

module.exports = async function register(route = 'routes') {
    try {
        let dir = path.join(__dirname, '..', route);
        console.log(dir);
        let files = await fs.readdir(dir);
        for (let file of files) {
            let current = path.join(__dirname, '..', route, file);
            let stat = await fs.lstat(current);
            if(stat.isDirectory()) {
                await register(app, path.join(route, file))
            }
            else {
                if(file.endsWith(".js") && !registeredRoutes.has(file)) {
                    let routeModule = require(current);
                    registeredRoutes.set(file, { module: routeModule, path: current });
                    let routeName = file.substring(0, file.indexOf(".js"));
                    this.use(`/${routeName}`, routeModule);
                    console.log("Registered " + routeName + " route!")
                }
                else
                    throw new Error(`${file} is already registered at ${registeredRoutes.get(file).path}`);
            }
        }
        return registeredRoutes;
    }
    catch(err) {
        console.log(err);
    }
}
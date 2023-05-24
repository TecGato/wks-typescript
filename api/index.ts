import { sequelize } from "./src/db"
import app from './src/app';
sequelize.sync().then(() => {
    console.log('base de datos conectada!');
    app.listen(3001, function () {
        console.log('App is listening on port 3001!');
    });
})
.catch((err) => console.log(err));


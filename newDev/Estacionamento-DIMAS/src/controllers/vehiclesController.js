import { openDatabase } from "../database.js";


export const listVehicles = async (request, response) => {
    const db = await openDatabase();
    const vehicles = await db.all(`
        SELECT * FROM vehicles
    `);
    db.close();
    response.send(vehicles);
};

export const insertVehicles = async (request, response) => {
    const { model, label, type, owner, observation } = request.body;
    const db = await openDatabase();
    const data = await db.run(`
        INSERT INTO vehicles (model, label, type, owner, observation)
        VALUES (?, ?, ?, ?, ?)
    `, [model, label, type, owner, observation]);
    db.close();
    response.send({
        id: data.lastID,
        model, 
        label, 
        type, 
        owner,
        observation
    });
};

export const updateVehicles = async (request, response) => {
    const { model, label, type, owner, observation } = request.body;
    const { id } = request.params;
    
    const db = await openDatabase();

    const vehicle = await db.get(`
        SELECT * FROM vehicles WHERE id = ?
    `, [id]);
    
    if (vehicle) {
        const data = await db.run(`
            UPDATE vehicles 
               SET model = ?, 
                   label = ?, 
                   type = ?, 
                   owner = ?, 
                   observation = ?
             WHERE id = ?
        `,  [model, label, type, owner, observation, id]);
        
        db.close();
        response.send({
            id,
            model, 
            label, 
            type, 
            owner,
            observation
        });
        return;
    }

    db.close();
    response.send(vehicle || {});
}

export const removeVehicle = async (request, response) => {
    const { id } = request.params;
    const db = await openDatabase();
    const data = await db.run(`
        DELETE FROM vehicles 
         WHERE id = ?
    `, [id]);
    db.close();
    response.send({
        id,
        message: `Veículo [${id}] removido com sucesso`
    });
}
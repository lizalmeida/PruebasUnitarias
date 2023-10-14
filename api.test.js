const request =require ('supertest') 
const app=require ('../index') 
const assert = require('assert');

describe('GET /api/empleados', ()=>{
    it('TEST 01 lista empleados', (done)=>{
    request(app)
    .get('/api/empleados')
    .expect(200,done)
    });
});

describe("POST /api/empleados",()=>{
    it('TEST 02 empleado creado', (done)=>{
        const data={
            "nombre":"David Menesese",
            "cargo":"Contador",
            "departamento":"Finanzas",
            "sueldo": "3000"
        }
        request(app)
        .post('/api/empleados')
        .send(data)
        .expect(200)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
    it('TEST 03 empleado no creado', (done)=>{
        const data={};
        request(app)
        .post('/api/empleados')
        .send(data)
        .expect(400)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
});

describe("PUT /empleados/:id",()=>{
    it('TEST 04 empleado se actualiza', (done)=>{
        const data={
            "nombre":"David Meneses Nuevo",
            "cargo":"Contador",
            "departamento":"Finanzas",
            "sueldo": "555666"
        }
        request(app)
        .put('/api/empleados/6512503a4337c5678b90ae3b')
        .send(data)
        .expect(200)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
    it('TEST 05 empleado NO se actualiza', (done)=>{
        const data={};
        request(app)
        .put('/api/empleados/1')
        .send(data)
        .expect(400)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
});    
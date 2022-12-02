//? •	Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)

SELECT NOMBRES FROM EMPLEADOS ORDER BY NOMBRES DESC

//? •	Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.

SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO,LOCALIDADES.LOCALIDAD 
FROM EMPLEADOS
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID 
WHERE PUESTOS.PUESTO = "Soporte" 

//? •	Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.


SELECT NOMBRES FROM EMPLEADOS WHERE NOMBRE LIKE '%o' 

//? •	Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.  

SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO, EMPLEADOS.SUELDO
FROM EMPLEADOS 
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE LOCALIDADES.LOCALIDAD = "Carlos Paz"

//? •	Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000

SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO,LOCALIDADES.LOCALIDAD, EMPLEADOS.SUELDO 
FROM EMPLEADOS
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID 
WHERE SUELDO BETWEEN 10000 AND 13000

//? •	Visualizar los departamentos con más de 5 empleados

SELECT DEPARTAMENTOS.DENOMINACION
FROM DEPARTAMENTOS
JOIN EMPLEADOS ON DEPARTAMENTOS.ID = EMPLEADOS.DEPARTAMENTO_ID
GROUP BY DEPARTAMENTOS.DENOMINACION
HAVING count(EMPLEADOS.NOMBRES)>5

//? •	Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.

SELECT EMPLEADOS.NOMBRES
FROM EMPLEADOS 
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE LOCALIDADES.LOCALIDAD = "Córdoba" AND PUESTOS.PUESTO = "Analista" OR 
PUESTOS.PUESTO = "Programador"

//? •	Calcula el sueldo medio de todos los empleados.

SELECT AVG(SUELDO) AS [SUELDO_PROMEDIO]
FROM EMPLEADOS

//? •	¿Cuál es el máximo sueldo de los empleados del departamento 10?

SELECT SUELDO, MAX(SUELDO)
FROM EMPLEADOS 
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
WHERE DEPARTAMENTOS.ID = 10

//? •	Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.

SELECT SUELDO, MIN(SUELDO)
FROM EMPLEADOS 
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
WHERE PUESTOS.PUESTO = "Soporte"

//? •	Para cada puesto obtener la suma de sueldos.

SELECT PUESTOS.PUESTO, SUM(SUELDO) 
FROM EMPLEADOS 
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
GROUP BY PUESTOS.PUESTO


//Point class (x, y, z coordinates)
export class Point {
    constructor(x, y, z, depth = 0) {
        this.x = x
        this.y = y
        this.z = z
        this.depth = depth
    }
}

export class Orientation {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

export class Face3d {
    constructor(points, color){
        this.points = points
        this.color = color
    }

    transform(tx, ty, tz){
        let transformed_face = []
        for(let point of this.points){
            let x = point.x
            let y = point.y
            let z = point.z

            //Point Rotation
            let rx = tx * Math.PI / 180
            let ry = ty * Math.PI / 180
            let rz = tz * Math.PI / 180
            let last_x = x;
            let last_y = y;
            let last_z = z;
            x = last_x*Math.cos(rz) - last_y*Math.sin(rz) + 0
            y = last_x*Math.sin(rz) + last_y*Math.cos(rz) + 0
            z = last_z

            last_x = x;
            last_y = y;
            last_z = z;
            x = last_x*Math.cos(ry) + 0 + last_z*Math.sin(ry)
            y = last_y
            z = -last_x*Math.sin(ry) + 0 + last_z*Math.cos(ry)

            last_x = x;
            last_y = y;
            last_z = z;
            x = x
            y = 0 + last_y*Math.cos(rx) - last_z*Math.sin(rx)
            z = 0 + last_y*Math.sin(rx) + last_z*Math.cos(rx)

            //Add points
            transformed_face.push(new Point(x, y, z))
        }
        return(new Face3d(transformed_face, this.color))
    }
    translation(tx, ty, tz){
        let transformed_face = []
        for(let point of this.points){
            let x = point.x
            let y = point.y
            let z = point.z

            x += tx
            y += ty
            z += tz

            //Add points
            transformed_face.push(new Point(x, y, z))
        }
        return(new Face3d(transformed_face, this.color))
    }
    projection(){
        let transformed_face = []
        for(let point of this.points){
            let x = point.x
            let y = point.y
            let z = point.z

            //Perspective Projection
            let last_x = x
            let last_y = y
            let last_z = z
            const distance = 500
            const fov = 1000
            const depth = last_z + distance
            x = last_x * fov / depth
            y = last_y * fov / depth

            //Add points
            transformed_face.push(new Point(x, y, z, depth))
        }
        return(new Face3d(transformed_face, this.color))
    }
}

export class Object3d {
    constructor(faces){
        this.faces = faces
    }
}
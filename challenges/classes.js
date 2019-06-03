// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(info){
        this.length = info.length;
        this.width = info. width;
        this.height = info.height;
    }

    volume() {
        return (this.length * this.width * this.height)
    };

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    };
};

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// class CubeMaker extends CuboidMaker2 {
//     constructor(info){
//         super(info);
//     }

//     cubeVolume(){
//         return (this.length * 3)
//     }

//     cubeSurfaceArea(){
//         return (6 * (this.length^2))
//     }
// }

// const cuboid = new CuboidMaker2({
//     length: 4,
//     width: 5,
//     height: 5,
//   })

// // console.log(cuboid.cubeVolume());
// // console.log(cuboid.cubeSurfaceArea());
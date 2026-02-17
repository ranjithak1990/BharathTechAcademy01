let empSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0]
let empName: string[] = ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Brown', 'Eva Green']
let empExp: number[] = [5.1, 3.2, 7.1, 10.2, 2.4]
let empRating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5]
let hike = 0;
let result = new Map<string, number>()
for (let i = 0; i < empSalary.length; i++) {
    if (empRating[i] >= 4.0) {
        if (empExp[i] >= 5) {
            hike = (empSalary[i] * 15.0 / 100) + 1500 + 5000
            result.set(empName[i], hike / empSalary[i])
        } else {
            hike = (empSalary[i] * 15.0 / 100) + 1500
            result.set(empName[i], hike / empSalary[i])
        }
    } else if (empRating[i] < 3.0) {
        if (empExp[i] >= 5) {
            hike = (empSalary[i] * 3.0 / 100) + 300 + 5000
            result.set(empName[i], hike / empSalary[i])
        } else {
            hike = (empSalary[i] * 3.0 / 100) + 300
            result.set(empName[i], hike / empSalary[i])
        }
    } else {
        if (empExp[i] >= 5) {
            hike = (empSalary[i] * 10.0 / 100) + 1200 + 5000
            result.set(empName[i], hike / empSalary[i])
        } else {
            hike = (empSalary[i] * 10.0 / 100) + 1200
            result.set(empName[i], hike / empSalary[i])
        }
    }
}
console.log(result)
let set=new Set([23,12,45,12]);
console.log(set.has(23)) //true
console.log(set.keys()) //{23,12,45}
console.log(set.values()) //{23,12,45}

for(k of set.keys()){
    console.log(k)
}
set.add(13)
console.log(set.values()) //{23,12,45,13}
console.log(set.delete(13)) //true
console.log(set.values()) //{23,12,45}

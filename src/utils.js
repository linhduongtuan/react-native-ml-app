export const getBreed = className => className.split('_').map(p => {
    return p.charAt(0).toUpperCase() + p.slice(1)
}).join(' ')

export const getBreedImg = className => {
    const breed = className.split('_').map(p => {
        return p.charAt(0).toLowerCase() + p.slice(1)
    }).join('_')
    return `${process.env.PUBLIC_URL}/images/${breed}.jpg`
}

// How to preprocess input in CoreML?
// const preprocess = input => {
//     const {data, width, height} = input

//     // data processing
//     const dataTensor = ndarray(new Float32Array(data), [width, height, 4]);
//     const dataProcessedTensor = ndarray(new Float32Array(width * height * 3), [1, 3, width, height]);
//     ops.assign(dataProcessedTensor.pick(0, 0, null, null), dataTensor.pick(null, null, 0));
//     ops.assign(dataProcessedTensor.pick(0, 1, null, null), dataTensor.pick(null, null, 1));
//     ops.assign(dataProcessedTensor.pick(0, 2, null, null), dataTensor.pick(null, null, 2));
//     ops.divseq(dataProcessedTensor, 255);
//     ops.subseq(dataProcessedTensor.pick(0, 0, null, null), 0.485);
//     ops.subseq(dataProcessedTensor.pick(0, 1, null, null), 0.456);
//     ops.subseq(dataProcessedTensor.pick(0, 2, null, null), 0.406);
//     ops.divseq(dataProcessedTensor.pick(0, 0, null, null), 0.229);
//     ops.divseq(dataProcessedTensor.pick(0, 1, null, null), 0.224);
//     ops.divseq(dataProcessedTensor.pick(0, 2, null, null), 0.225);

//     return dataProcessedTensor.data;
// }
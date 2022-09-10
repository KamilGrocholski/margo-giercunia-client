const useNumberFormat = (num: number) => {
    return Math.abs(num) > 999 ? Math.sign(num)*(parseInt((Math.abs(num)/1000).toFixed(1))) + 'k' : Math.sign(num)*Math.abs(num)
}

export default useNumberFormat
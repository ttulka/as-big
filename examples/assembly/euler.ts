import Big from 'as-big/Big';

export function euler(n: i32 = 1000, dp: i32 = 100): string {
    
    const term = Big.ONE + Big.ONE / Big.of(n);

    return (term ^ n).round(dp).toString();
}
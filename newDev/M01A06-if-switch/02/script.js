var x = 2
var y = 3

if (x == 2) {
    console.log('x = OK')
}


// AND && (e) -> vv=v, vf=f, fv=f, ff=f
if (x == 2 && y == 2) {
    console.log('x e y = OK')
} else {
    console.log('x e y = Falhou')
}


// OR || (ou) -> vv=v, vf=v, fv=v, ff=f
if (x == 2 || y == 2) {
    console.log('x e y = OK')
} else {
    console.log('x e y = Falhou')
}

/* Tabela-Verdade dos operadores lógicos AND e OR:

&& - AND (com duas condições)

V && V -> V
V && F -> F
F && V -> F
F && F -> F

|| - OR (com duas condições)

V || V -> V
V || F -> V
F || V -> V
F || F -> F

! - NOT (inverte o valor lógico)

!V -> F
!F -> V */
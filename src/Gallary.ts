export {}

const images = Array(500).fill(0).map((_, index) => {
  return `
    <div class="inline-block border border-yellow-700 rounded-lg aspect-square w-[96px]">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" />
    </div>
  `
})

const component= document.createElement('div')
component.className = 'p-4'
component.innerHTML = images.join('')
document.querySelector('#root')!.append(component);


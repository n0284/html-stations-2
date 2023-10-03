function displayList(){
    const element = document.getElementById('fruits');
    element.innerHTML = '<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>';
    const p = document.querySelectorAll('p');
    Array.prototype.forEach.call(p, item => {
        item.remove();
      });
}
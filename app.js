const data = [];
        let sum = 0;
        const list = document.getElementById('list');
        const total = document.getElementById('total');

        document.getElementById('add').addEventListener('click', function() {
            const productName = document.getElementById('product_name').value;
            const productPrice = parseFloat(document.getElementById('product_price').value);

            if (!productName || isNaN(productPrice)) {
                alert('Please enter valid product name and price.');
                return;
            }

            data.push({ name: productName, price: productPrice });
            sum += productPrice;

            // Clear input fields
            document.getElementById('product_name').value = '';
            document.getElementById('product_price').value = '';

            print();
        });

        function print() {
            const listItem = document.createElement('li');
            const latestProduct = data[data.length - 1];
            listItem.textContent = `${latestProduct.name}: $${latestProduct.price.toFixed(2)}`;
            list.appendChild(listItem);

            total.textContent = sum.toFixed(2);
        }
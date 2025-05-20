# Linked Lists

A linked list is a linear data structure where each element (called a node) points to the next. Unlike arrays, elements are not stored in contiguous memory. This makes insertion and deletion more efficient in certain cases, especially when working with dynamic data.

Each node typically contains:
- **Data**: The actual value.
- **Pointer**: Reference to the next node in the list.

There are several types of linked lists:
- **Singly Linked List**: Each node points to the next node.
- **Doubly Linked List**: Each node points to both the next and previous nodes.
- **Circular Linked List**: Last node points back to the head.

## Linked List vs Array

| Feature                | Array            | Linked List         |
|------------------------|------------------|---------------------|
| Memory allocation      | Contiguous       | Non-contiguous      |
| Access by index        | O(1)             | O(n)                |
| Insertion (start/mid)  | O(n)             | O(1) (with pointer) |
| Deletion               | O(n)             | O(1) (with pointer) |
| Size                  | Fixed (in static) | Dynamic             |

Arrays are great for fast random access. Linked lists are better when you need frequent insertions/deletions.

## Resources

📖 [W3Schools - DSA Linked Lists](https://www.w3schools.com/dsa/dsa_theory_linkedlists.php)

---

✍️ Notes, visual diagrams, and practice problems are added in this folder.
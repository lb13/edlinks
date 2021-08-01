---
Title: Contact Us
---

<form name="contact" method="POST" data-netlify="true">

  <div class="field">
    <label for="name" class="label">Your Name: </label>
    <div class="control">
        <input class="input" type="text" name="name" />
    </div> 
  </div>

  <div class="field">
  <label for="email" class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" name="email" type="email" placeholder="Email input">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label for="message" class="label">Message</label>
  <div class="control">
    <textarea name="message" class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button type="submit" class="button is-link">Submit</button>
  </div>
</div>

</form>